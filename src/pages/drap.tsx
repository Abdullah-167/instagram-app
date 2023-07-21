import React, { useState } from 'react';

const DragAndDropPage = () => {
    const [lists, setLists] = useState([
        { id: 'list-1', title: 'To Do', cards: ['Card 1', 'Card 2', 'Card 3'] },
        { id: 'list-2', title: 'In Progress', cards: ['Card 4', 'Card 5'] },
        { id: 'list-3', title: 'Done', cards: ['Card 6', 'Card 7'] },
    ]);

    const [draggedCardIndex, setDraggedCardIndex] = useState(null);
    const [tiltCards, setTiltCards] = useState([]); // Add state to store the names of tilted cards
    const [draggedCardPosition, setDraggedCardPosition] = useState({ x: 0, y: 0 });

const handleDragStart = (event, listId, cardIndex) => {
  event.dataTransfer.effectAllowed = 'move'; // Set the effectAllowed property to 'move' to remove the default drag image
  event.dataTransfer.setData('text/plain', ''); // Remove the text data to disable the default drag image

  // Instead of setting the draggedCardIndex, store the entire card data
  const draggedCardData = {
    listId,
    cardIndex,
    cardData: lists.find((list) => list.id === listId).cards[cardIndex],
  };
  event.dataTransfer.setData('application/json', JSON.stringify(draggedCardData));

  // Add the card name to the tiltCards state when starting to drag
  const cardName = lists.find((list) => list.id === listId).cards[cardIndex];
  setTiltCards([...tiltCards, cardName]);
  const cardRect = event.currentTarget.getBoundingClientRect();
  setDraggedCardPosition({ x: event.clientX - cardRect.left, y: event.clientY - cardRect.top });
};


    const handleDragEnd = () => {
        setDraggedCardIndex(null);
        setTiltCards([]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };



    const handleDrop = (event, listId) => {
        event.preventDefault();
        const data = JSON.parse(event.dataTransfer.getData('application/json'));
        const { listId: sourceListId, cardIndex: sourceCardIndex, cardData } = data;
        const targetCardIndex = lists.findIndex((list) => list.id === listId);

        if (sourceListId === listId && sourceCardIndex !== targetCardIndex) {
            handleReorder(listId, sourceCardIndex, targetCardIndex);
        } else if (sourceListId !== listId) {
            const sourceListIndex = lists.findIndex((list) => list.id === sourceListId);
            const destinationListIndex = lists.findIndex((list) => list.id === listId);

            const newLists = [...lists];
            newLists[sourceListIndex].cards.splice(sourceCardIndex, 1);

            // Calculate the target index with spacing between cards
            const targetIndexWithSpacing = targetCardIndex < sourceCardIndex ? targetCardIndex : targetCardIndex + 1;
            newLists[destinationListIndex].cards.splice(targetIndexWithSpacing, 0, cardData);

            setLists(newLists);
            setTiltCards([]);
        }

        // Clear the tilt effect for all cards on drop
        setTiltCards([]);
    };

    const handleAddCard = (listId) => {
        const newCardTitle = prompt('Enter card title:');
        if (newCardTitle) {
            const listIndex = lists.findIndex((list) => list.id === listId);
            const newLists = [...lists];
            newLists[listIndex].cards.push(newCardTitle);
            setLists(newLists);
        }
    };

    const handleDeleteCard = (listId, cardIndex) => {
        const listIndex = lists.findIndex((list) => list.id === listId);
        const newLists = [...lists];
        newLists[listIndex].cards.splice(cardIndex, 1);
        setLists(newLists);
    };

    const handleReorder = (listId, fromIndex, toIndex) => {
        const listIndex = lists.findIndex((list) => list.id === listId);
        if (listIndex === -1) {
            console.error(`List with id "${listId}" not found.`);
            return;
        }

        const newLists = [...lists];
        const [reorderedCard] = newLists[listIndex].cards.splice(fromIndex, 1);
        newLists[listIndex].cards.splice(toIndex, 0, reorderedCard);
        setLists(newLists);
    };

    const handleDrag = (event) => {
        event.preventDefault();
      };

    

    const handleListTitleChange = (listId) => {
        const newTitle = prompt('Enter new list title:');
        if (newTitle) {
            const listIndex = lists.findIndex((list) => list.id === listId);
            const newLists = [...lists];
            newLists[listIndex].title = newTitle;
            setLists(newLists);
        }
    };

    const handleTiltCard = (cardName) => {
        // Toggle the tilt effect for the clicked card
        if (tiltCards.includes(cardName)) {
            setTiltCards(tiltCards.filter((card) => card !== cardName));
        } else {
            setTiltCards([...tiltCards, cardName]);
        }
    };

    return (
        <div className="board">
            {lists.map((list) => (
                <div
                    key={list.id}
                    className="list"
                    onDragOver={(event) => handleDragOver(event)}
                    onDrop={(event) => handleDrop(event, list.id)}
                >
                    <div className="list-title" onClick={() => handleListTitleChange(list.id)}>
                        {list.title}
                    </div>
                    <div className="cards-container"> {/* Add a container to hold the cards */}
                        {list.cards.map((card, index) => (
                            <div
                                key={card}
                                className="card"
                                draggable="true"
                                onDragStart={(event) => handleDragStart(event, list.id, index)}
                                onDrag={(event) => handleDrag(event)}
                                onDragEnd={handleDragEnd}
                                style={{
                                    zIndex: draggedCardIndex === index ? 1 : 'auto',
                                    position: draggedCardIndex === index ? 'absolute' : 'static',
                                    left: draggedCardIndex === index ? draggedCardPosition.x + 'px' : 'auto',
                                    top: draggedCardIndex === index ? draggedCardPosition.y + 'px' : 'auto',
                                    transform: `rotate(${tiltCards.includes(card) ? '3deg' : '0'}) scale(${tiltCards.includes(card) ? '1.05' : '1'})`,
                                }}
                                onClick={() => handleTiltCard(card)}
                            >
                                <span>{card}</span>
                                <button onClick={() => handleDeleteCard(list.id, index)}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => handleAddCard(list.id)}>Add Card</button>
                </div>
            ))}
            <style jsx>{`
        .board {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin: 20px;
        }

        .list {
          width: 250px;
          padding: 10px;
          background-color: #f7f7f7;
          border-radius: 4px;
        }

        .list-title {
          font-weight: bold;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .card {
          background-color: #007bff;
          color: #fff;
          padding: 10px;
          margin-bottom: 8px;
          cursor: pointer;
          user-select: none;
          border-radius:10px;
          position: absolute;

                }

        
        .cards-container {
            transform-origin: top right;
            transform: ${draggedCardIndex !== null ? 'rotate(3deg) scale(1.05)' : 'none'};
          }

        .card:hover {
          opacity: 0.8;
        }

        button {
          margin-top: 4px;
        }
      `}</style>
        </div>
    );
};

export default DragAndDropPage;
